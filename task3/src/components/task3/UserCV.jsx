import { Component } from "react";
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Contacts from "./Contacts";
import "./CV.css";
class UserCv extends Component{
    render(){
        return(
            <div className="cv">
                <h1>USER CV</h1>
<PersonalInfo/><hr/>
<Experience/><hr/>
<Contacts/>
      </div>
        );
    }
}
export default UserCv;