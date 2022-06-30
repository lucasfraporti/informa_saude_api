const mysql = require('../mysql');

exports.getReportActive = async (req, res, next) => {
    try {
        const result = await mysql.execute("SELECT * FROM report WHERE active = 1;")
        const response = {
            report: result.map(report => {
                return {
                    ID_REPORT: report.ID_REPORT,
                    REPORTER: report.REPORTER,
                    LATITUDE: report.LATITUDE,
                    LONGITUDE: report.LONGITUDE,
                    REPORT_TYPE: report.REPORT_TYPE,
                    CONFIRMED: report.CONFIRMED,
                    REPORT_DATE: report.REPORT_DATE,
                    ACTIVE: report.ACTIVE
                }
            })
        }
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};

exports.getAllReports = async (req, res, next) => {
    try {
        const result = await mysql.execute("SELECT * FROM report;")
        const response = {
            report: result.map(report => {
                return {
                    ID_REPORT: report.ID_REPORT,
                    REPORTER: report.REPORTER,
                    LATITUDE: report.LATITUDE,
                    LONGITUDE: report.LONGITUDE,
                    REPORT_TYPE: report.REPORT_TYPE,
                    CONFIRMED: report.CONFIRMED,
                    REPORT_DATE: report.REPORT_DATE,
                    ACTIVE: report.ACTIVE
                }
            })
        }
        return res.status(200).send(response);
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};

exports.postCategory = async (req, res, next) => {
    try {
        const query = 'INSERT INTO report (REPORTER, LATITUDE, LONGITUDE, REPORT_TYPE, CONFIRMED, ACTIVE) VALUES (?, ?, ?, ?, ?, ?)';
        const result = await mysql.execute(query, [
            req.body.REPORTER,
            req.body.LATITUDE,
            req.body.LONGITUDE,
            req.body.REPORT_TYPE,
            req.body.CONFIRMED,
            req.body.ACTIVE
        ]);

        const response = {
            message: 'Report inserido com sucesso',
            createdReport: {
                reporter: req.body.reporter,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                report_type: req.body.report_type,
                confirmed: req.body.confirmed,
                active: req.body.active,
            }
        }
        return res.status(201).send(response);
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};