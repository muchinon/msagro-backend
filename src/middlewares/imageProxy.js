import axios from "axios";

export async function imageProxyMiddleware(req, res) {
  try {
    // Extract image URL from query parameters
    const imageUrl = req.query.url;

    // Validate URL
    if (!imageUrl) {
      return res.status(400).send("No URL provided");
    }

    // Fetch the image with specific headers
    const response = await axios.get(imageUrl, {
      responseType: "arraybuffer", // Important for binary data
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Referer: "https://drive.google.com",
        Accept: "image/*", // Accept any image type
        "Accept-Encoding": "identity", // Prevent compression issues
      },
      // Optional timeout to prevent hanging requests
      timeout: 10000,
    });

    // Set content type based on response
    const contentType = response.headers["content-type"] || "image/jpeg";
    res.set("Content-Type", contentType);

    // CORS and caching headers
    res.set("Access-Control-Allow-Origin", "*");
    res.set("Cache-Control", "public, max-age=86400"); // Cache for 24 hours

    // Send image data
    res.send(response.data);
  } catch (error) {
    // Detailed error logging
    console.error("Image Proxy Error:", {
      message: error.message,
      url: req.query.url,
      stack: error.stack,
    });

    // Different error responses based on error type
    if (error.response) {
      // The request was made and the server responded with a status code
      res
        .status(error.response.status)
        .send(`Proxy Error: ${error.response.statusText}`);
    } else if (error.request) {
      // The request was made but no response was received
      res.status(504).send("Gateway Timeout: No response from image server");
    } else {
      // Something happened in setting up the request
      res.status(500).send("Internal Proxy Error");
    }
  }
}
