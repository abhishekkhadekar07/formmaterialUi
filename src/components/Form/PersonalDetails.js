import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, MenuItem } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import useStyles from './styles';


const PersonalDetails = ({ currentId, setCurrentId }) => {
    const [personalDetails, setPersonalDetails] = useState({
        fullName: '', email: '', phoneNumber: '', PhysicalAddress: '', website: '', govermentId: '',
        companyName: '', ConfirmationOfIntent: '', DeclarationOfEligibility: '', ProofOfCarbonCreditIssurance: ''
    });
    const classes = useStyles();

    useEffect(() => {
        console.log(personalDetails);

    }, [personalDetails]);

    const clear = () => {
        setPersonalDetails({
            fullName: '', email: '', phoneNumber: '', PhysicalAddress: '', website: '', govermentId: '',
            companyName: '', ConfirmationOfIntent: '', DeclarationOfEligibility: '', CarbonCreditProjectDetails: '', ProjectType: '', VerificationStandard: '', ProjectRelatedDocuments: '', ProofOfCarbonCreditIssurance: '', EstimatedCarbonCreditVolumesAvailable: ''
        })
    };
    let userDetails;
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('personalDetails', personalDetails);
        userDetails = JSON.parse(localStorage.getItem('Details')) || [];
        userDetails.push(personalDetails);
        localStorage.setItem('Details', JSON.stringify(userDetails));
        console.log("local*******************", localStorage.getItem('Details'));
        clear();
    };

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', width: '40%' }}>
                <Paper className={classes.paper}>
                    <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                        <Typography variant="h6">PersonaL Details Form</Typography>
                        <TextField name="FullName" variant="outlined" label="FullName" fullWidth value={personalDetails.fullName} onChange={(e) => setPersonalDetails({ ...personalDetails, fullName: e.target.value })} />
                        <TextField name="Phone Number" variant="outlined" label="Phone Number" fullWidth value={personalDetails.phoneNumber} onChange={(e) => setPersonalDetails({ ...personalDetails, phoneNumber: e.target.value })} />
                        <TextField name="Email" variant="outlined" label="Email" fullWidth value={personalDetails.email} onChange={(e) => setPersonalDetails({ ...personalDetails, email: e.target.value })} />
                        <TextField name="PhysicalAddress" variant="outlined" label="PhysicalAddress" fullWidth value={personalDetails.PhysicalAddress} onChange={(e) => setPersonalDetails({ ...personalDetails, PhysicalAddress: e.target.value })} />
                        <TextField name="Goverment Id" variant="outlined" label="Goverment Id" fullWidth value={personalDetails.govermentId} onChange={(e) => setPersonalDetails({ ...personalDetails, govermentId: e.target.value })} />
                        <TextField name="Confirmation Of Intent" select variant="outlined" label="Confirmation Of Intent" fullWidth value={personalDetails.ConfirmationOfIntent} onChange={(e) => setPersonalDetails({ ...personalDetails, ConfirmationOfIntent: e.target.value })}>
                            <MenuItem value="Seller">Seller</MenuItem>
                            <MenuItem value="Buyer">Buyer</MenuItem>
                        </TextField>
                        {personalDetails.ConfirmationOfIntent === "Seller" &&
                            <>
                                <TextField name="Carbon credit project details" variant="outlined" label="Carbon credit project details" fullWidth value={personalDetails.CarbonCreditProjectDetails} onChange={(e) => setPersonalDetails({ ...personalDetails, CarbonCreditProjectDetails: e.target.value })} />
                                <TextField name="Project type" select variant="outlined" label="Project type" fullWidth value={personalDetails.ProjectType} onChange={(e) => setPersonalDetails({ ...personalDetails, ProjectType: e.target.value })}>
                                    <MenuItem value="renewable energy">renewable energy</MenuItem>
                                    <MenuItem value="waste management">waste management</MenuItem>
                                </TextField>
                                <TextField name="verification standard" select variant="outlined" label="Verification standard" fullWidth value={personalDetails.ProjectType} onChange={(e) => setPersonalDetails({ ...personalDetails, VerificationStandard: e.target.value })}>
                                    <MenuItem value="Verra">Verra</MenuItem>
                                    <MenuItem value="Gold standard">Gold standard</MenuItem>
                                    <MenuItem value="UN-verified">UN-verified</MenuItem>
                                    <MenuItem value="Other">Other</MenuItem>
                                </TextField>
                                <TextField name="Proof of carbon credit issurance or ownership details" variant="outlined" label="Proof of carbon credit issurance or ownership details" fullWidth value={personalDetails.ProofOfCarbonCreditIssurance} onChange={(e) => setPersonalDetails({ ...personalDetails, ProofOfCarbonCreditIssurance: e.target.value })} />
                                <TextField name="Project related documents" variant="outlined" label="Project related documents" fullWidth value={personalDetails.ProjectRelatedDocuments} onChange={(e) => setPersonalDetails({ ...personalDetails, ProjectRelatedDocuments: e.target.value })} />
                                <TextField name="Estimated carbon credit volumes available" variant="outlined" label="Estimated carbon credit volumes available" fullWidth value={personalDetails.EstimatedCarbonCreditVolumesAvailable} onChange={(e) => setPersonalDetails({ ...personalDetails, EstimatedCarbonCreditVolumesAvailable: e.target.value })} />
                            </>
                        }
                        <TextField name="Declaration Of Eligibility" variant="outlined" label="Declaration Of Eligibility" fullWidth value={personalDetails.DeclarationOfEligibility} onChange={(e) => setPersonalDetails({ ...personalDetails, DeclarationOfEligibility: e.target.value })} />
                        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" onClick={handleSubmit} fullWidth>Submit</Button>
                        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
                    </form>
                </Paper>
            </div>
        </>
    );
};
export default PersonalDetails;
