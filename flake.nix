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
      in {
        devShells.default = pkgs.mkShell {
          packages = with pkgs; [
            nodejs_22
            git
            pkg-config
            vips
          ];

          buildInputs = with pkgs; [
            python3
          ];

          shellHook = ''
            echo "Portfolio dev shell"
            echo "  node $(node --version)"
            echo "  npm  $(npm --version)"
            echo ""
            echo "Run: npm install && npm run dev"
          '';
        };
      });
}
