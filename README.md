typescriptで環境変数使ってみた

```
# dev
$ cdk synth --app 'npx ts-node src/app.ts' -c env=dev

#stg
$ cdk synth --app 'npx ts-node src/app.ts' -c env=stg
```
