import React, { useEffect, useState } from 'react';

import { Container } from '@mui/material';
import DietService from './../../service/dietService'
import Title from 'src/component/Title';
import AppTable from 'src/component/AppTable';
import { entriesReportColumns, averageCaloriesReportColumns, getEntriesReportRows } from './AdminReport.business';

export const AdminReportContainer = () => {
    const [ report, setReport ] = useState<IAdminReportCount>()
    useEffect(() => {
        DietService.reportCount()
        .then(res => setReport(res))
    }, []);

    return (
        <Container sx={{ py: 2 }} maxWidth={false}>
           <Title variant='h5'>Reports </Title>
           {report ?
            <>
                <AppTable name='AdminReport' columns={entriesReportColumns} rows={getEntriesReportRows(report!)} />
                <AppTable name='CaloriesReport' columns={averageCaloriesReportColumns} rows={report.userLastSevenDaysSumCal} />
            </>
           : null}
        </Container>
      )
}

