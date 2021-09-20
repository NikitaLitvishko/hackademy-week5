import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <div>
    <div className="container pt-5">
      <h1 id="title">Title of form</h1>
      <p id="description">Survey form example</p>
      <form className="mt-5" id="survey-form">
      <div className="row">
        <div className="col mb-3">
          <label htmlFor="name" className="name-label mb-2" id="name-label">Name</label>
          <input className="form-control" id="name" placeholder="Enter your name" required/>
        </div>
        <div className="col mb-3">
            <label htmlFor="email" className="email-label mb-2" id="email-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com" required/>
        </div>
      </div>
      <div className="row">
        <div className="col mb-3">
          <label htmlFor="number" className="name-label mb-2" id="number-label">Age(18-70)</label>
          <input type="number" min="18" max="70" className="form-control" id="number" placeholder="Enter your age"/>
        </div>
        <div className="col mb-3">
          <label className="name-label mb-2" htmlFor="dropdown">Example of dropdown</label>
          <select id="dropdown" className="form-select">
            <option selected value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <div className="mb-3">
        <p className="mb-2">Example of radio buttons</p>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="radio-button" id="first" value="first" checked/>
          <label className="form-check-label" htmlFor="male">First</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="radio-button" id="second" value="second"/>
          <label className="form-check-label" htmlFor="female">Second</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="radio-button" id="third" value="third"/>
          <label className="form-check-label" htmlFor="other">Third</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="radio" name="radio-button" id="fourth" value="fourth"/>
         <label className="form-check-label" htmlFor="private">Fourth</label>
        </div>
      </div>
      <div className="mb-3">
        <p className="mb-2">Example of checkboxes:</p>
        <div className="form-check form-check-inline">
         <input className="form-check-input" type="checkbox" id="ex-checkbox-1" value="one"/>
          <label className="form-check-label" htmlFor="ex-checkbox-1">One</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="ex-checkbox-2" value="two"/>
          <label className="form-check-label" htmlFor="ex-checkbox-2">Two</label>
        </div>
        <div className="form-check form-check-inline">
         <input className="form-check-input" type="checkbox" id="ex-checkbox-3" value="three"/>
         <label className="form-check-label" htmlFor="ex-checkbox-3">Three</label>
        </div>
        <div className="form-check form-check-inline">
          <input className="form-check-input" type="checkbox" id="ex-checkbox-4" value="four"/>
          <label className="form-check-label" htmlFor="ex-checkbox-4">Four</label>
        </div>
      </div>
      <div className="mb-3">
        <label htmlFor="comments" className="form-label">Comments</label>
        <textarea className="form-control" id="comments" rows={3}></textarea>
      </div>
      <button type="submit" className="btn btn-primary" id="submit">Submit</button>
      </form>
    </div>
  </div>
  )
}
