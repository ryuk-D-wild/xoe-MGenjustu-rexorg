# MGenjustu

## Setup Instructions

### 1. Update Your Environment Variables
Before running the project, update your `.env` file located in the `genjustu_server` root directory:

```
CLOUDINARY_NAME = "Your_Cloudinary_Name_Baby"
CLOUDINARY_API_KEY = "Your_Cloudinary_API_KEY_Baby"
CLOUDINARY_SECRET_KEY = "Your_Cloudinary_SECRET_KEY_Baby"
MONGODB_URI = "Your_MongoDB_Atlas_URI_Baby"
```

## Running the Project

To run Genjustu, you need to start three separate processes in different command prompts:

### Step 1: Start Genjustu Server
Open a command prompt and navigate to the `genjustu_server` directory, then run:
```
npm run server
```

### Step 2: Start Genjustu
Open another command prompt, navigate to the `genjustu` directory, and run:
```
npm run dev
```

### Step 3: Start Genjustu Controls
Open a third command prompt, navigate to the `genjustu` directory again, and run:
```
npm run dev
```

## Important Notes
- No need to install dependencies separately; everything is already installed virtually.
- (optional if require) [nmp install] in all 3 Folders if you deleted the node_modules
- An internet connection is required while running the project.
- Genjustu Controls is used to add music and albums. These will be pushed to the Genjustu server, which uses MongoDB and Cloudinary as remote storage.

Enjoy using Genjustu! 🚀

 

