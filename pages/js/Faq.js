import Team from '../js/Team'
import React, { useState, useEffect } from "react";
import Navbar from './Navbar'
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../css/About.css";
import Footer from './Footer';
import Head from 'next/head'

export default function Faq() {

    const [state, setstate] = useState();
    useEffect(() => {
        setstate(
            localStorage.getItem("lang") ? localStorage.getItem("lang") : "ru"
        );
    }, []);
    return (
        <div>
            <Head>
    <title>Baracar</title>
    <meta charset="UTF-8"/><meta http-equiv="X-UA-Compatible" content="IE=edge"/><meta name="viewport" content="width=device-width,initial-scale=1"/><meta name="description" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "/><meta name="keywords" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "/><meta name="author" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "/><meta name="description" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы.  "/><meta name="twitter:card" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "/><meta name="twitter:site" content="Baracar.uz"/><meta name="twitter:creator" content="Baracar.uz"/><meta name="twitter:title" content="Baracar"/><meta name="twitter:description" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы.  "/><meta name="twitter:image" content="url_to_image"/><meta property="og:title" content="Baracar"/><meta property="og:description" content="Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы.  "/><meta property="og:url" content="Baracar.uz"/><meta property="og:site_name" content="Baracar.uz"/><meta property="og:locale" content="en_uz"/><meta property="og:type" content="Baracar.uz"/><meta property="fb:app_id" content="ID_APP_FACEBOOK"/>
      </Head>
            <Navbar />
            
            <div className="question" style={{ marginBottom: "60px" }}>
                <h1>
                    {state === "ru"
                        ? "Часто задаваемые вопросы"
                        : "Tez-tez so'raladigan savollar"}
                </h1>
                <div className="question_body">
                    <div className="question_left">
                        <Accordion>
                            <AccordionSummary
                                id="panel1a-header"
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                            >
                                <Typography>
                                    {state === "ru"
                                        ? "Как я могу приобрести машина на Baracar?   "
                                        : "Qanday qilib Baracardan mashina sotib olsam bo'ladi?"}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {state === "ru"
                                        ? "Вам необходимо предварительно выбрать машину на нашем сайте, а затем приехать в наш автосалон и осмотреть выбранную машину. Дальше выбрать форму оплаты: все полностью сразу или же оформить автокредит. "
                                        : "Siz avval bizning veb-saytimizda avtomashinani tanlashingiz, so'ngra salonimizga kelib, tanlangan avtomobilni tekshirishingiz kerak. Keyin to'lov shaklini tanlang: barchasi bir vaqtning o'zida yoki avtomobil krediti orqali harid qiling."}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="acc1" style={{ minHeight: "53px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>
                                    {state === "ru" ? "Как работает 30-дневная гарантия?" : "30 kunlik kafolat qanday ishlaydi?"}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {state === "ru"
                                        ? "Baracar гарантирует исправность каждой машины минимум на 30 дней. При возникновении проблем с машиной в срок гарантии, наши партнеры по тех обслуживанию устранят их. В случае невозможности устранения неполадок, Baracar обязуется выкупить автомобиль за 100% от купленной суммы. "
                                        : "Baracar har bir avtomobilning kamida 30 kun xizmat ko'rsatishiga kafolat beradi. Agar kafolat muddati davomida mashinada muammo yuzaga kelsa, texnik xizmat ko'rsatish bo'yicha hamkorlarimiz uni tuzatadilar. Agar muammoni bartaraf etishning iloji bo'lmasa, Baracar avtomobilni sotib olingan summaning 100% ga qaytarib sotib olish majburiyatini oladi."}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion className="acc1" style={{ minHeight: "53px" }}>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>
                                    {state === "ru" ? "Как я могу связаться с вами? " : "Siz bilan qanday bog'lanishim mumkin?"}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {state === "ru"
                                        ? "По номеру (33) 032 11 12 или же оставить сообщение и наши операторы с вами свяжутся в кратчайшее время.  "
                                        : "(33) 032 11 12 raqamiga qo'ng'iroq qiling yoki xabar qoldiring va operatorlarimiz imkon qadar tezroq siz bilan bog'lanadi."}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                    <div className="question_right"><Accordion>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                        >
                            <Typography>
                                {state === "ru" ? "Почему покупать лучше на Baracar, чем на рынке, или же других автодилерах? " : "Nima uchun bozor yoki boshqa avtodilerlardan ko'ra Baracardan sotib olgan ma'qul?"}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography>
                                {state === "ru"
                                    ? "Baracar - самый надежный и безопасный, а также выгодный автодилер в Узбекистане. Не смотря на недавний запуск, мы имеем более чем 150 довольных клиентов, число которых продолжает расти. Покупка авто на рынке или у других автодилеров, несет за собой большие риски и случаи недобросовестности перепродажников неоднократны. Доверьтесь экспертам! "
                                    : "Baracar – O‘zbekistondagi eng ishonchli, xavfsiz va qulay avtosalon. Yaqinda ishga tushirilganiga qaramay, bizda 150 dan ortiq mamnun mijozlar bor va ularning soni o'sishda davom etmoqda. Bozorda yoki boshqa avtodilerlardan avtomobil sotib olish katta xavflarni keltirib chiqaradi va sotuvchilarning insofsizligi holatlari takrorlanadi. O’z ishining mutaxassislariga ishoning!"}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography>
                                    {state === "ru" ? "Я нашел окрашенные части по корпусу автомобиля, которых не было в описании к авто. Как мне быть? " : "Men avtomobilning kuzovida avtomobil tavsifida bo'lmagan bo'yalgan qismlarni topdim. Men nima qilaman?"}
                                </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography>
                                    {state === "ru"
                                        ? "Такой случай почти исключается, так как наши эксперты тщательно проверяют каждое авто выставленную на продажу. Но в случае возникновения подобной ситуации, покупатель получает возможность вернуть автомобиль и получить 100% от суммы оплаченной для покупки авто или же обсудить возможность заниженной цены с представителем Baracar, у которого вы приобрели авто. "
                                        : "Bunday holat deyarli chiqarib tashlanadi, chunki bizning mutaxassislarimiz sotiladigan har bir mashinani diqqat bilan tekshiradilar. Ammo bunday vaziyat yuzaga kelgan taqdirda, xaridor avtomobilni qaytarib olish va avtomobilni sotib olish uchun to'langan summaning 100 foizini olish yoki siz mashinani sotib olgan Baracar vakili bilan arzonroq narxni muhokama qilish imkoniyatiga ega bo'ladi."}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
                <button className="question_btn">
                    {state === "ru" ? "Узнать больше" : "Ko'proq bilib oling"}
                </button>
            </div>
            <Team />
            <Footer/>
        </div>
    )
}
