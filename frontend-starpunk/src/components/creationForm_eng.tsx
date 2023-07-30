import { FC } from 'react';
import "../css/umi-god.css"
import { Link , useNavigate} from 'react-router-dom';
// ts
import { creationForm } from '../controller/creationForm';
//Components
const CreationFormEN: FC = () => {
    const form = new creationForm();
    const navigate = useNavigate();
    return <div >
        <div className="g-0 row mt-4 justify-content-center ">
            <div className="col-3 bg-light p-4 ">
                <p className='text-center fw-bolder fs-4'>Create Accout</p>
                <div id="user-alert"></div>
                <div className="form-floating mb-3">
                    <input onChange={(event) => {
                        form.setEmail(event);
                        form.OnVetifyEmail();
                    }}
                        id="email"
                        type="email" className="form-control"
                        placeholder="email@example.com" />
                    <label>Email address</label>
                </div>
                <div className="form-floating mb-1">
                    <input onChange={(event) => {
                        form.setUserName(event);
                        form.OnVetifyName();
                    }}
                        id="userName"
                        type="text" className="form-control" placeholder="UserName" />
                    <label >UserName</label>
                </div>
                <div className="form-floating mt-3">
                    <input onChange={(event) => {
                        form.setPassWord(event);
                        form.OnVetifyPassWord();
                    }}
                        id="passWord"
                        type="password" className="form-control" placeholder="Password" />
                    <label >Password</label>
                </div>
                <div id="birthday" className="form-text">*BirthDay</div>
                <div className="d-flex justify-content-center mt-1">
                    <select id='day'
                        onChange={(event) => { form.setDay(event) }}
                        className="form-select form-select-sm me-1" aria-label=".form-select-sm example">
                        <option selected>dd</option>
                        {
                            form.days.map((day) => (
                                <option key={day + "dd"} value={day}>{day}</option>
                            ))
                        }
                    </select>
                    <select id='month'
                        onChange={(event) => { form.setMonth(event) }}
                        className="form-select form-select-sm me-1" aria-label=".form-select-sm example">
                        <option selected>mm</option>
                        {
                            form.months.map((month) => (
                                <option key={month + "mm"} value={month}>{month}</option>
                            ))
                        }
                    </select>
                    <select id='year'
                        onChange={(event) => { form.setYear(event) }}
                        className="form-select form-select-sm" aria-label=".form-select-sm example">
                        <option selected>yyyy</option>
                        {
                            form.years.map((year) => (
                                <option key={year + "yyyy"} value={year}>{year}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="row g-2 mt-1">
                    <div className="col-md">
                        <div className="form-floating">
                            <input
                                onChange={(event) => {
                                    form.setPin(event)
                                    form.OnVetifyPin();
                                }}
                                id="pin"
                                type="number" className="form-control" placeholder="name@example.com" />
                            <label >PIN 6 </label>
                        </div>
                    </div>
                    <div className="col-md">
                        <div className="form-floating">
                            <select id="gender"
                                onChange={(event) => {
                                    form.setGender(event)
                                }}
                                className="form-select" aria-label="Floating label select example">
                                <option selected value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                            <label >Gender</label>
                        </div>
                    </div>
                </div>
                <div className="mt-3">
                    <button onClick={()=>
                    {
                        navigate('/');
                    }}
                    type="button" className="btn btn-secondary"><i className='fas fa-caret-left'></i> Go Back</button>
                    <button type="button" onClick={form.OnSubmit}
                        className="btn btn-primary ms-2">Creation <i className='fas fa-caret-right'></i> </button>
                </div>
                <div className="form-text mt-3">You already have an account ?<Link to={"/en"}> Sign In </Link></div>
            </div>
        </div>
    </div>
};

export default CreationFormEN; 