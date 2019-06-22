import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/xtjt.json'

// @ts-ignore
const Xtjt = () => <ExpressionRunnerPrecomputed {...config} />

export default Xtjt