import '../App.css';

export default function TableBody(props){
    console.log(props)
    return(
        <tbody>
            <tr className="trow">
                <td>{props.bettor1}</td>
                <td>{props.bettor2}</td>
                <td>{props.betDescription}</td>
                <td>{props.bet}</td>
                <td>{props.winner}</td>
                
            </tr>
        </tbody>
    )

}