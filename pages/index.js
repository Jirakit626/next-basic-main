import React, { useState, useEffect } from 'react';
import Head from "next/head"
import axios from 'axios';
import {
  Box,
  Typography,

} from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const CryptoList = () => {
  const [cryptoData, setCryptoData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data from CoinMarketCap API
        const response = await axios.get(
          'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
          {
            headers: {
              'X-CMC_PRO_API_KEY': 'fe1a1d6e-742f-49a5-a2ed-ceee5e858062', // Replace with your API key
            },
            params: {
              start: 1,
              limit: 100,
              convert: 'THB', // Convert prices to Thai Baht
            },
          }
        );

        // Set fetched data to state
        console.log(response.data.data)
        setCryptoData(response.data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const rows = cryptoData.map((crypto,index) => {
    return {
      id:index,
      logo: `https://s2.coinmarketcap.com/static/img/coins/64x64/${crypto.id}.png`,
      name: crypto.name,
      price: crypto.quote.THB.price
    }
  })
  const columns = [
    {
      field: 'logo',
      headerName: 'Logo',
      width: 150,
      editable: true,
      renderCell: (params) => {
        const  img = params.value
                  return (
                    <img src={params.value}  style={{ width: '50px', height: 'auto' }} />
                  );
                }
    },
    {
      field: 'name',
      headerName: 'name',
      width: 150,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      type: 'number',
      width: 150,
      editable: true,
    }
  ];
  return (
    <Box id='table' sx={{ width: '100vw', marginBottom: '30px' ,marginTop:'70px' }}>
      <Typography variant="h4" gutterBottom>
        Top 100 Cryptocurrencies
      </Typography>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 50,
            },
          },
        }}
        pageSizeOptions={[50]}
        // checkboxSelection
        // disableRowSelectionOnClick
      />
    </Box>
  );
};

export default CryptoList;