       const sheetUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTD6N96LOI5axrJo6tOckNLVaM-l0zmt5UG_0GjVn2kfhuu6bgAuvt4uuIJwqZhPvYyl1NCVdxhezHi/pub?output=csv';

        // Use a CORS proxy to fetch the data
        const proxyUrl = 'https://api.allorigins.win/get?url=' + encodeURIComponent(sheetUrl);

        // Fetch the CSV data via the proxy
        fetch(proxyUrl)
            .then(response => response.json()) // Parse the JSON response
            .then(data => {
                const csv = data.contents; // The CSV content is in the "contents" field
                const rows = csv.split('\n'); // Split the CSV into rows

                // Get the value from A2 (second row, first column)
                const valueFromA2 = rows[1].split(',')[0]; // A2 is in the second row
                
                // Display the value in the paragraph
               a = `Value from A2: ${valueFromA2}`;
                console.log(a)
            })
            .catch(error => console.error('Error fetching data:', error)); // If there's an error
