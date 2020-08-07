export class StudentDetails {
    public firstName: String;
    public lastName: String;
    public contactNumber: Number;
    public institutionName: String;
    public dob: String;
    public doj: String;
    public roomNumber: String;
    public duration: Number;
    public status: String;
    public idProof: String;
    public parent: {
        name: String,
        contactNumber: Number,
        residenceContact: String,
        idProof: String,
        address: String
    }
    public guardian: {
        name: String,
        address: String,
        contactNumber: Number;
    }


}
