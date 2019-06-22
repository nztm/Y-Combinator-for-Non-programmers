import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/kfcw.json'

// @ts-ignore
const Kfcw = () => <ExpressionRunnerPrecomputed {...config} />

export default Kfcw