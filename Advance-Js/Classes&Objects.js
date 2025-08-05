class Form {
    submit(submittedUser){
        alert(this.submitteduser+"Form Submitted")
    }
    Cancel(){
        alert(`${this.submit}Form Cancelled`)
    }
    fillDetails(givenName){
        this.name=givenName;
    }
}

const Huzaifa=new Form();
const Ali=new Form();
const Sameer=new Form();

Huzaifa.submit();
Ali.fillDetails("Ali");

Sameer.fillDetails("sameer");
Sameer.submit();

