// Your Google Sheets ID (from the URL)
const sheetId = '2PACX-1vQpVDsF8VOex-O7bGShbsPqTv-8r8Fvm6iNAOCZZrMIJEY0_n6DMJ0i1Y_gt0cTIuWVK_53TD0rTatu';

// The range where your view count is stored in the sheet
const range = 'Sheet1!B1'; // Assuming the count is in cell B1

// Your Google Sheets API Key (replace with your actual key)
const apiKey = 'AIzaSyCEFH3THUy3V7780D-SHzvSVaBpXM8gfRw';

// Function to get the current view count from Google Sheets
function getViewCount() {
  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`)
    .then(response => response.json())
    .then(data => {
      const currentCount = parseInt(data.values[0][0] || '0'); // Get the current count from cell B1
      updateViewCount(currentCount + 1); // Increment the count by 1
    }) 
    .catch(error => console.error('Error fetching data:', error));
}

// Function to update the view count in Google Sheets
function updateViewCount(newCount) {
  const updateData = {
    range: range,
    majorDimension: 'ROWS',
    values: [
      [newCount] // Update the view count in B1
    ]
  };

  fetch(`https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?valueInputOption=RAW&key=${apiKey}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updateData),
  })
    .then(response => response.json())
    .then(() => {
      // Optionally display the updated view count on the webpage
      document.getElementById('viewCount').innerText = `Page views: ${newCount}`;
    })
    .catch(error => console.error('Error updating data:', error));
}

