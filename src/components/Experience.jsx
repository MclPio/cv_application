export default function Experience({ companyName, positionTitle, description, startDate, endDate}){
  return (
    <>
      <h2>Experience</h2>
      <p>{ companyName }</p>
      <p>{ positionTitle }</p>
      <p>{ description }</p>
      <p>{ startDate }</p>
      <p>{ endDate }</p>
    </>
  )
}