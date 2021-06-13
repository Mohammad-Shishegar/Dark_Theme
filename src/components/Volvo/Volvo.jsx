import React, { useContext , useEffect, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCar, FaCcPaypal, FaTaxi } from "react-icons/fa"
import {word} from "../../services/language"
import { LanguageContext, Language } from '../../services/context/Language';
import "./VolvoStyle.scss"


function Volvo() {
    
    var language = useContext(LanguageContext)
    const [lan , setLan] = useState(word.en)

    const changeLan = () => {
        if(language.language === "english")
            setLan(word.en)
        else
            setLan(word.fa)
    }
    useEffect(()=>{
        changeLan()
    } , [language])

    return (
        <div className="body">
            {/* header */}
            <section className="volvo-header">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="header-image size flex">
                                <h1>XC60</h1>
                                <p>{lan.header_text}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* safe */}
            <section className="volvo-safe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 col-sm-12">
                            <div className="safe-image size">
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-12">
                            <div className="safe-text">
                                <h2>
                                    {lan.safe_title}
                                </h2>
                                <p>
                                    {lan.safe_text}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* work */}
            <section className="volvo-work">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="text">
                                <h2>{lan.work.title}</h2>
                                <p>{lan.work.text}</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="work-icon">
                                <FaCar className="icon" />
                                <p>{lan.work.feature_1}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-icon">
                                <FaCcPaypal className="icon" />
                                <p>{lan.work.feature_2}</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="work-icon">
                                <FaTaxi className="icon" />
                                <p>{lan.work.feature_3}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* provide */}
            <section className="volvo-provide">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="text flex">
                                <span>{lan.provide.title_1}</span>
                                <span>{lan.provide.title_2}</span>
                                <p>{lan.provide.text}</p>
                                <a href="#" className="flex" type="button">{lan.provide.readMore}</a>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="image size"> </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* repair */}
            <section className="volvo-repair">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="image size" >

                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="text-1 flex">
                                        <h3>{lan.repair.title_1}</h3>
                                        <p>{lan.repair.text_1}</p>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="text-2 flex">
                                    <h3>{lan.repair.title_2}</h3>
                                        <p>{lan.repair.text_2}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* car repair */}
            <section className="volvo-car-repair">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="text flex">
                                <FaCar className="icon"/>
                                <h2>{lan.car_repair.title}</h2>
                                <p>{lan.car_repair.text}</p>
                                <a href="#" type="button" className="flex">{lan.car_repair.readMore}</a>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <div className="image size">
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Volvo
