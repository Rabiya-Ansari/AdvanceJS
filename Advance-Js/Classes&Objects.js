class Form {
    submit(submittedUser) {
        this.submitteduser = submittedUser;
        alert(this.submitteduser+"Form is submitted");    
    }
    cancel(CancelledUser) {
        this.user = CancelledUser;
        alert(` ${this.user} Form is cancelled`);
    }
    fillDetails(givenName) {
        this.name = givenName;
        // console.log(this.name);
    }
}

const huzaifa = new Form();
const aaliyan = new Form();
const sameer = new Form();

// huzaifa.submit("Huzaifa");
aaliyan.cancel("Aaliyan");

sameer.fillDetails("Sameer");
sameer.submit();