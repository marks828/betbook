import TableBody from "./TableBody"
import { data } from "../data"
export default function Table() {
console.log(data[0].betDesctiption)
    return (
        <table>
            <thead>
                <tr>
                    <thead>
                    </thead>
                </tr>
            </thead>

            {data.map((e, i)=>
                <TableBody 
                    bettor1 = {data[i].bettor1}
                    bettor2 = {data[i].bettor2}
                    betDescription = {data[i].betDescription}
                    bet = {data[i].bet}
                    winner = {data[i].winner}
                />
            )}

        </table>
        
    )
}