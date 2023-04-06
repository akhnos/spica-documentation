# Storage

This module is essentially a file manager on your Spica instance. You can store, list, update and delete your files via the directories on this module.

To list all of your directories and their content, simply navigate to the **Storage** section on the side panel.  

In the Storage page, you can create and access your directories, create new folders, and add files to these folders. Spica allows you to sort your files by date or name, copy, replace or delete your files. You can also edit an image file in this page.

## Online Image Editor

To edit the image typed storage item, click the **Edit** button at the bottom of the image display. Clicking this button will take you to the Image Editing page.

On that page, you can crop the image, scale by percentage, and rotate it as you wish. Click on the **save** icon to save the image after editing.

![Image Editor](/img/docs/storage/image_editor.png)

## Google Cloud Storage Integration

Spica supports Google Cloud Storage out-of-the-box.

First, you have to download your service account. To download follow these steps:

- In the Cloud Console, go to the Service Accounts page.
- Click Select a project, choose a project, and click Open.
- Find the row of the service account that you want to create a key for. In that row, click on the More button, and then click on the Create key button.
- Select the Key type as JSON and click Create.

Clicking to the Create button, downloads a service account key file. Make sure that you store this file securely because it can be used to authenticate your service account.

To integrate your Cloud Storage account, you have to either restart or create a new instance with the following parameters:

```shell
  $ spica serve <docker machine name> -- --storage-strategy="gcloud" --gcloud-service-account-path=<where you download the service account file> --gcloud-bucket-name=<GCloud bucket name>
```

:::caution
GCloud bucket should be configured for public access.
:::