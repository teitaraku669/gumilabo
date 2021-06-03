import { useState, useEffect } from "react";
import AWS from 'aws-sdk'

export const useS3 = () => {
  const AWS_ACCESS_KEY = process.env.REACT_APP_AWS_ACCESS_KEY;
  const AWS_SECRET_KEY = process.env.REACT_APP_AWS_SECRET_KEY;
  const BUCKET = process.env.REACT_APP_BUCKET;
  const FILE_NAME = process.env.REACT_APP_FILE_NAME;
  const REGION = process.env.REACT_APP_REGION;

  AWS.config.update({
    accessKeyId: AWS_ACCESS_KEY,
    secretAccessKey: AWS_SECRET_KEY,
    region: REGION
  });

  const s3 = new AWS.S3();

  const [gumiData, setGumiData] = useState()

  useEffect(() => {
    s3.getObject({ Bucket: BUCKET, Key: FILE_NAME },
      function (error, data) {
        if (error != null) {
        } else {
          setGumiData(data)
        }
      }
    );
  }, []);

  return gumiData
}