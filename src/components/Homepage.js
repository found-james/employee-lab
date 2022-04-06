import EmployeeListItem from "./EmployeeListItem";
export default function Homepage ({ employeeData }) {

    return (
        <>
        <header>
            <h2>Employee Directory</h2>
            <input type="text" />
        </header>
        <section>
        {employeeData.map((employee) => {
            return (
                <EmployeeListItem
                    fullName={employee.fullName}
                    role={employee.title}
                    picUrl={employee.image}
                    />
                );
        })}
        </section>

        </>
    ) 
}