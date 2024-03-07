**删除 cache**
rm -rf .cache && rm -rf public && npm run build
**上传**
文档： https://developers.cloudflare.com/pages/how-to/use-direct-upload-with-continuous-integration/

CLOUDFLARE_ACCOUNT_ID=250b5e8210edab7f6dab9255611ee385 wrangler pages publish public --project-name=test --branch main