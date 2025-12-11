
aws s3 cp . s3://manasotasaxquartet.com/  --recursive --exclude "*" --include "*.html" 
aws s3 cp . s3://manasotasaxquartet.com/  --recursive --exclude "*" --include "*.js" 
aws s3 cp . s3://manasotasaxquartet.com/  --recursive --exclude "*" --include "*.css" 
aws s3 cp . s3://manasotasaxquartet.com/  --recursive --exclude "*" --include "*.ico" 
aws s3 cp . s3://manasotasaxquartet.com/  --recursive --exclude "*" --include "*.png" 
aws s3 cp . s3://manasotasaxquartet.com/  --recursive --exclude "*" --include "*.svg" 
aws s3 cp . s3://manasotasaxquartet.com/  --recursive --exclude "*" --include "videos/*.mp4" 
aws s3 cp . s3://manasotasaxquartet.com/  --recursive --exclude "*" --include "images/*.jpg" 
aws s3 cp . s3://manasotasaxquartet.com/  --recursive --exclude "*" --include "images/*.png" 

aws cloudfront create-invalidation --distribution-id E14Y2782MKOXR8 --paths "/*" --no-cli-pager
aws cloudfront create-invalidation --distribution-id E3AE300A8ORGOD --paths "/*" --no-cli-pager

