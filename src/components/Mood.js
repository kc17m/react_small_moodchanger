import { useState } from "react";
import happyMin from "../happy_minion.png"
import sad from "../sad-minion.png"

const Mood = () => {

    const [happy, setHappy] = useState(false)

    const handleMood = () => {
        setHappy(!happy)
    }


    return (
        <div className="container">
            {happy ? (
                <div>
                    <p>You are sad? </p>
                    <figure>
                        <img src={sad} alt="" />
                    </figure>
                    <button onClick={handleMood}>Change to happy </button>
                </div>
            ) : (
                <div>
                    <p>You are happy? </p>
                    <figure>
                        <img src={happyMin} alt="" />
                    </figure>
                    <button onClick={handleMood}>Change to Sad </button>
                </div >
            )



            }



        </div >
    );
}

export default Mood;