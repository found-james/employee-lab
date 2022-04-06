
export default function EmployeeListItem (props){

    return (
        <section style={ {display: "flex", border: "1px solid black"} }>
        <article style={{
                        className: "employee-pic",
                        display: "inherit",
                        width: "30%",
                        height: "100px",
                        // border: "1px solid black",
                        alignItems: "center",
                        justifyContent: "center"
        }}>
        <span style={{
                    border: "1px solid black",
                    display: "inherit",
                    height: "inherit",
                    maxHeight: "102px",
                    maxWidth: "103px",
                    width: "100%",
                    borderRadius: "50%"
        }}>
          <img src={props.picUrl} alt="employee pic" />
        </span>
      </article>
      <article style={props.articleTwo}>
        <h4>{props.fullName}</h4>
        <p>{props.role}</p>
      </article>
    </section>
    );
}