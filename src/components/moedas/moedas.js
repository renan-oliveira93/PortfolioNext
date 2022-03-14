import apiMoedas from '../../../pages/api/api_moedas'
import { useEffect, useState } from 'react';
import styles from '../../../styles/Home.module.css';

export default function Moedas() {
    const [moedas, setMoedas] = useState(['']);


    const getMoedas = async () => {
        await apiMoedas.get("/").then(({ data }) => { setMoedas(data) });
    };

    useEffect(() => {
        getMoedas();
    }, []);

    return (
        <div className={styles.container_moedas}>
            <h4>Cotação de moedas</h4>
            {moedas.USD &&
                <table>
                    <thead className={styles.thead_moedas}>
                        <th>Moeda</th>
                        <th>Atual</th>
                        <th>Alta</th>
                        <th>Baixa</th>
                        <th>Variação</th>
                    </thead>
                    <tbody className={styles.tbody_moedas}>
                        <tr>
                            <td>Dólar</td>
                            <td>{moedas.USD.ask}</td>
                            <td>{moedas.USD.high}</td>
                            <td>{moedas.USD.low}</td>
                            <td>{moedas.USD.varBid}</td>
                        </tr>
                        <tr>
                            <td>Dólar turismo</td>
                            <td>{moedas.USDT.ask}</td>
                            <td>{moedas.USDT.high}</td>
                            <td>{moedas.USDT.low}</td>
                            <td>{moedas.USDT.varBid}</td>
                        </tr>
                        <tr>
                            <td>Euro</td>
                            <td>{moedas.EUR.ask}</td>
                            <td>{moedas.EUR.high}</td>
                            <td>{moedas.EUR.low}</td>
                            <td>{moedas.EUR.varBid}</td>
                        </tr>
                        <tr>
                            <td>Libra Esterlina</td>
                            <td>{moedas.GBP.ask}</td>
                            <td>{moedas.GBP.high}</td>
                            <td>{moedas.GBP.low}</td>
                            <td>{moedas.GBP.varBid}</td>
                        </tr>
                        <tr>
                            <td>Bitcoin</td>
                            <td>{moedas.BTC.ask}</td>
                            <td>{moedas.BTC.high}</td>
                            <td>{moedas.BTC.low}</td>
                            <td>{moedas.BTC.varBid}</td>
                        </tr>
                        <tr>
                            <td>Dólar Canadense</td>
                            <td>{moedas.CAD.ask}</td>
                            <td>{moedas.CAD.high}</td>
                            <td>{moedas.CAD.low}</td>
                            <td>{moedas.CAD.varBid}</td>
                        </tr>
                        <tr>
                            <td>Dólar Australiano</td>
                            <td>{moedas.AUD.ask}</td>
                            <td>{moedas.AUD.high}</td>
                            <td>{moedas.AUD.low}</td>
                            <td>{moedas.AUD.varBid}</td>
                        </tr>
                        <tr>
                            <td>Franco Suíço</td>
                            <td>{moedas.CHF.ask}</td>
                            <td>{moedas.CHF.high}</td>
                            <td>{moedas.CHF.low}</td>
                            <td>{moedas.CHF.varBid}</td>
                        </tr>
                        <tr>
                            <td>Yuan Chinês</td>
                            <td>{moedas.CNY.ask}</td>
                            <td>{moedas.CNY.high}</td>
                            <td>{moedas.CNY.low}</td>
                            <td>{moedas.CNY.varBid}</td>
                        </tr>
                        <tr>
                            <td>Iene Japonês</td>
                            <td>{moedas.JPY.ask}</td>
                            <td>{moedas.JPY.high}</td>
                            <td>{moedas.JPY.low}</td>
                            <td>{moedas.JPY.varBid}</td>
                        </tr>
                    </tbody>
                </table>}

        </div >
    )
} 