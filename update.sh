git pull origin
cd frontend
npm i
npm run build
cd ../backend
npm i
cd ../
pm2 restart portfolio-frontend
pm2 restart portfolio-backend
