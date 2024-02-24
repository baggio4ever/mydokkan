aws s3 cp --recursive ./dist/mydokkan s3://hira-apps2/mydokkan
aws s3 cp --exclude "*" --include "*.js" --content-type="text/javascript" --metadata-directive="REPLACE" --recursive s3://hira-apps2/mydokkan s3://hira-apps2/mydokkan
