import React, {useState} from 'react'
import SuperRange from './common/c7-SuperRange/SuperRange'
import SuperDoubleRange from './common/c8-SuperDoubleRange/SuperDoubleRange'

function HW11() {
    const [value1, setValue1] = useState(0)
    const [value2, setValue2] = useState(100)
    const [disable, setDisable] = useState(false)

    return (
        <div>
            <hr/>


            {/*should work (должно работать)*/}
            <div>
                <span>{value1}</span>
                <SuperRange setValue1={setValue1}
                            value1={value1}
                    // сделать так чтоб value1 изменялось
                />
            </div>

            <div>
                <span>{value1}</span>
                <SuperDoubleRange min={0}
                                  max={100}
                                  step={1}
                    setValue1={setValue1}
                    setValue2={setValue2}
                                  value1={value1}
                                  value2={value2}
                                  disable={disable}
                                  setDisable={setDisable}
                    // сделать так чтоб value1 и value2 изменялось
                />
                <span>{value2}</span>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
