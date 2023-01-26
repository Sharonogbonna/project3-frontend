import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { editApp, getApp } from "../../services/application-api";

const EditApp = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    getApp(id).then((res) => setData(res.data));
  }, []);

  const editTheApp = (e) => {
    e.preventDefault();
    const updatedApp = {
      company: e.target.company.value,
      position: e.target.position.value,
      appLink: e.target.appLink.value,
      description: e.target.description.value,
      benefits: e.target.benefits.checked,
      dateApplied: e.target.dateApplied.value,
      response: e.target.response.checked,
      responseDate: e.target.responseDate.value,
      interview: e.target.interview.checked,
      interviewDate: e.target.interviewDate.value,
      offer: e.target.offer.value,
      stillInterested: e.target.stillInterested.checked,
      location: e.target.location.value,
      compensation: e.target.compensation.value,
    };
    editApp(id, updatedApp)
    .then(() => nav(`/this-app/${id}`))
  };
  return (
    <div id="form">
      <form onSubmit={editTheApp} className="app-form">
        <h4 className="form-title" id="app-form-title">
          Edit Application
        </h4>
        Company:{" "}
        <input
          type="text"
          name="company"
          placeholder="company"
          defaultValue={data.company}
        />{" "}
        <br />
        Position Title:{" "}
        <input
          type="text"
          name="position"
          placeholder="position title"
          defaultValue={data.position}
        />
        <br />
        Link to Application:{" "}
        <input
          type="text"
          name="appLink"
          placeholder="link"
          defaultValue={data.appLink}
        />
        <br />
        Job Description:{" "}
        <textarea
          name="description"
          placeholder="description"
          defaultValue={data.description}
        />
        <br />
        Location:{" "}
        <input
          type="text"
          name="location"
          placeholder="remote, hybrid, in-person"
          defaultValue={data.location}
        />
        <br />
        Pay Range:{" "}
        <input
          type="text"
          name="compensation"
          defaultValue={data.compensation}
        />
        <div>
          Benefits?{" "}
          <input
            type="checkbox"
            name="benefits"
            defaultChecked={data.benefits}
          />
        </div>
        <br />
        Date Applied:{" "}
        {data.dateApplied ? (
          <p>
            (current date applied is {new Date(data.dateApplied).toDateString()}{" "}
            )
          </p>
        ) : (
          ""
        )}{" "}
        <input type="date" name="dateApplied" />
        <br />
        <div>
        Heard Back?{" "}
        <input type="checkbox" name="response" defaultChecked={data.response} /></div>
        <span>Response Date:</span>
        {data.responseDate ? (
          <p>
            (current response date is{" "}
            {new Date(data.responseDate).toDateString()} )
          </p>
        ) : (
          ""
        )}{" "}
        
        <input type="date" name="responseDate" />
        <br />
        <div>Invited to interview?{" "}
        <input
          type="checkbox"
          name="interview"
          defaultChecked={data.interview}
        /></div>
        <span>Interview Date:{" "}</span>
        {data.interviewDate ? (
          <p>
            (current interview date is{" "}
            {new Date(data.interviewDate).toDateString()} )
          </p>
        ) : (
          ""
        )}{" "}
        <input type="date" name="interviewDate" />
        <br />
        Offer: <input type="number" name="offer" defaultValue={data.offer} />
        <br />
        <div>
        Am I still Interested:{" "}
        <input
          type="checkbox"
          name="stillInterested"
          defaultChecked={data.stillInterested}
        />
        </div>
        <input type="submit" name="submit" />
      </form>
    </div>
  );
};
export default EditApp;
