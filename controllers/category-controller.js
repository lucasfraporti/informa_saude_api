const mysql = require('../mysql');

exports.getReportActive = async (req, res, next) => {
    try {
        const result = await mysql.execute("SELECT * FROM report WHERE active = 1;")
        const response = {
            report: result.map(report => {
                return {
                    id_report: report.id_report,
                    reporter: report.reporter,
                    latitude: report.latitude,
                    longitude: report.longitude,
                    report_type: report.report_type,
                    confirmed: report.confirmed,
                    report_date: report.report_date,
                    active: report.active
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
                    id_report: report.id_report,
                    reporter: report.reporter,
                    latitude: report.latitude,
                    longitude: report.longitude,
                    report_type: report.report_type,
                    confirmed: report.confirmed,
                    report_date: report.report_date,
                    active: report.active
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
        const query = 'INSERT INTO report (REPORTER, LATITUDE, LONGITUDE, REPORT_TYPE, CONFIRMED, ACTIVE) VALUES (?, ?, ?, ?, ?, ?);';
        const result = await mysql.execute(query, [
            req.body.reporter,
            req.body.latitude,
            req.body.longitude,
            req.body.report_type,
            req.body.confirmed,
            req.body.active
        ]);

        const response = {
            message: 'Report inserido com sucesso',
            createdReport: {
                reporter: req.body.reporter,
                latitude: req.body.latitude,
                longitude: req.body.longitude,
                report_type: req.body.report_type,
                confirmed: req.body.confirmed,
                active: req.body.active
            }
        }
        return res.status(201).send(response);
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};