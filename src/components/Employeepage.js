
export default function Employeepage () {
    const paragraphText = ["office", "mobile", "SMS", "email"]

    return (
        <>
        <header>
            <h2>name of clicked employee</h2>
        </header>
        <section>
            <article>
                <span> </span>
            </article>
                { paragraphText.map( text => {
                        return (
                            <article>
                            <p> {text} </p>
                        </article>
                        )
                    })    
}
            </section>

        </>
    )
}