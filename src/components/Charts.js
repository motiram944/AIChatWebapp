import React, { useContext, useState } from 'react';
import { Line, Bar, Pie, Doughnut, Radar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement, RadialLinearScale } from "chart.js";
import { Select as MuiSelect, MenuItem as MuiMenuItem } from '@mui/material';
import styled from '@emotion/styled';
import { ContextApp } from '../utils/Context';

ChartJS.register(
    CategoryScale,
    PointElement,
    LinearScale,
    BarElement,
    LineElement,
    ArcElement,
    RadialLinearScale,
    Title,
    Tooltip,
    Legend
);


const Charts = ({ data }) => {
    const [selectedChartType, setSelectedChartType] = useState('line');
    const { isDarkMode } = useContext(ContextApp);

    const handleChartTypeChange = (event) => {
        setSelectedChartType(event.target.value);
    };

    const Select = styled(MuiSelect)`
  && {
    margin-bottom: 10px;
    background-color: ${({ theme }) => (isDarkMode ? '#1a1431' : '#fff')}; // Background color
    color: ${({ theme }) => (isDarkMode ? '#FFF' : '#333')}; // Text color
    & .MuiSelect-icon {
      color: ${({ theme }) => (isDarkMode ? '#1a1431' : '#333')}; // Dropdown icon color
    }
    & .MuiOutlinedInput-root {
      &:hover {
        border-color: ${({ theme }) => (isDarkMode ? '#1a1431' : '#333')}; // Border color on hover
      }
      &.Mui-focused {
        border-color: ${({ theme }) => (isDarkMode ? '#1a1431' : '#333')}; // Border color when focused
      }
    }
  }
`;

    const MenuItem = styled(MuiMenuItem)`
  && {
    background-color: ${({ theme }) => (isDarkMode ? '#1a1431' : '#fff')}; // Background color
    color: ${({ theme }) => (isDarkMode ? '#fff' : '#333')}; // Text color
    &:hover {
      background-color: ${({ theme }) => (isDarkMode ? '#1a143190' : '#f0f0f0')}; // Background color on hover
    }
    & .MuiList-root {
        background-color: ${({ theme }) => (isDarkMode ? '#1a1431' : '#fff')} !important;
    }
  }
`;

    const renderChart = () => {
        if (!data) return null;

        switch (selectedChartType) {
            case 'line':
                return <Line data={data?.data} />;
            case 'bar':
                return <Bar data={data?.data} />;
            case 'pie':
                return <Pie data={data?.data} />;
            case 'doughnut':
                return <Doughnut data={data?.data} />;
            case 'radar':
                return <Radar data={data?.data} />;
            default:
                return null;
        }
    };

    // Array of chart options
    const chartOptions = [
        { value: 'line', label: 'Line Chart' },
        { value: 'bar', label: 'Bar Chart' },
        { value: 'pie', label: 'Pie Chart' },
        { value: 'doughnut', label: 'Doughnut Chart' },
        { value: 'radar', label: 'Radar Chart' }
    ];

    return (
        <div style={{ width: '500px' }}>
            <div style={{ display: 'flex', width: '100%', justifyContent: 'flex-end' }}>
                <Select
                    value={selectedChartType}
                    onChange={handleChartTypeChange}
                    size="small"
                    sx={{ marginBottom: '10px' }}
                    inputProps={{
                        MenuProps: {
                            MenuListProps: {
                                sx: {
                                    backgroundColor: isDarkMode ? '#312e3d' : '',
                                },
                            },
                        },
                    }}
                >
                    {chartOptions.map(option => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </Select>
            </div>
            {renderChart()}
        </div>
    );
};

export default Charts;
