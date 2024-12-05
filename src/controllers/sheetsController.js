import { getGoogleSheetsClient } from "../config/googleSheets.js";

export async function getAllSheetData(req, res) {
  try {
    const sheets = await getGoogleSheetsClient();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Sheet1!A:Z", // Adjust range as needed
      majorDimension: "ROWS",
    });

    const values = response.data.values || [];

    // Optional: Remove empty rows
    const filteredValues = values.filter((row) =>
      row.some((cell) => cell !== "")
    );

    res.json({
      success: true,
      data: filteredValues,
      total: filteredValues.length,
    });
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch sheet data",
      error: error.message,
    });
  }
}

export async function getSpecificSheetData(req, res) {
  try {
    const { range } = req.params;
    const sheets = await getGoogleSheetsClient();

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: range || "Sheet1!A:Z",
      majorDimension: "ROWS",
    });

    res.json({
      success: true,
      data: response.data.values || [],
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Failed to fetch specific sheet data",
      error: error.message,
    });
  }
}

export async function getBannerData(req, res) {
  try {
    const sheets = await getGoogleSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Banner!A:F", // Adjust the sheet and range as needed
    });

    const values = response.data.values;
    res.json({
      success: true,
      data: values,
    });
  } catch (error) {
    console.error("Error fetching sheet data:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching data",
    });
  }
}

export async function getAboutSectionData(req, res) {
  try {
    const sheets = await getGoogleSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "About!A:D", // Adjust the sheet and range as needed
    });

    const values = response.data.values;
    res.json({
      success: true,
      data: values,
    });
  } catch (error) {
    console.error("Error fetching about section data:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching data",
    });
  }
}

export async function getContactData(req, res) {
  try {
    const sheets = await getGoogleSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Contact!A:B",
    });

    const values = response.data.values;
    res.json({
      success: true,
      data: values,
    });
  } catch (error) {
    console.error("Error fetching contact sheet data:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching contact data",
    });
  }
}

export async function getServicesData(req, res) {
  try {
    const sheets = await getGoogleSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Services!A:C",
    });

    const values = response.data.values;
    res.json({
      success: true,
      data: values,
    });
  } catch (error) {
    console.error("Error fetching services sheet data:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching services data",
    });
  }
}

export async function getProjectsData(req, res) {
  try {
    const sheets = await getGoogleSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Projects!A:B",
    });

    const values = response.data.values;
    res.json({
      success: true,
      data: values,
    });
  } catch (error) {
    console.error("Error fetching projects sheet data:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching projects data",
    });
  }
}

export async function getTestimonialsData(req, res) {
  try {
    const sheets = await getGoogleSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Testimonials!A:D",
    });

    const values = response.data.values;
    res.json({
      success: true,
      data: values,
    });
  } catch (error) {
    console.error("Error fetching testimonial sheet data:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching testimonial data",
    });
  }
}

export async function getFooterData(req, res) {
  try {
    const sheets = await getGoogleSheetsClient();
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEETS_SPREADSHEET_ID,
      range: "Footer!A:H",
    });

    const values = response.data.values;
    res.json({
      success: true,
      data: values,
    });
  } catch (error) {
    console.error("Error fetching footer sheet data:", error);
    res.status(500).json({
      success: false,
      message: "Error fetching footer data",
    });
  }
}
