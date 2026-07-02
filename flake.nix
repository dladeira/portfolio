{
  description = "Daniel Ladeira portfolio";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.eachDefaultSystem (system:
      let
        pkgs = import nixpkgs { inherit system; };

        dockerImageName = "portfolio";
        dockerImageTag = "latest";
        dockerImage = "${dockerImageName}:${dockerImageTag}";
        dockerPort = 8080;

        dockerBuild = pkgs.writeShellApplication {
          name = "docker-build";
          runtimeInputs = with pkgs; [ docker docker-buildx ];
          text = ''
            set -euo pipefail
            cd "${./.}"
            docker build -t ${dockerImage} .
          '';
        };

        dockerRun = pkgs.writeShellApplication {
          name = "docker-run";
          runtimeInputs = with pkgs; [ docker ];
          text = ''
            set -euo pipefail
            docker run --rm -p ${toString dockerPort}:${toString dockerPort} ${dockerImage}
          '';
        };
      in {
        packages = {
          default = dockerBuild;
          docker-build = dockerBuild;
          docker-run = dockerRun;
        };

        apps = {
          default = {
            type = "app";
            program = "${dockerBuild}/bin/docker-build";
          };
          docker-build = {
            type = "app";
            program = "${dockerBuild}/bin/docker-build";
          };
          docker-run = {
            type = "app";
            program = "${dockerRun}/bin/docker-run";
          };
        };

        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            git
            pkg-config
            vips
            docker
            docker-buildx
          ];

          buildInputs = with pkgs; [
            python3
          ];

          shellHook = ''
            echo "Portfolio dev shell"
            echo "  node   $(node --version)"
            echo "  npm    $(npm --version)"
            echo "  docker $(docker --version 2>/dev/null | cut -d' ' -f1-3 || echo 'not available')"
            echo ""
            echo "Local dev:  npm install && npm run dev"
            echo "Docker:     docker build -t ${dockerImage} ."
            echo "            docker run --rm -p ${toString dockerPort}:${toString dockerPort} ${dockerImage}"
            echo "Or:         nix run .#docker-build && nix run .#docker-run"
          '';
        };
      });
}
