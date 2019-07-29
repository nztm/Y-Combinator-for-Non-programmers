import React from 'react'
import ExpressionRunnerPrecomputed from 'src/components/ExpressionRunnerPrecomputed'
import config from 'src/lib/runners/fdek.json'

// @ts-ignore
const Fdek = () => <ExpressionRunnerPrecomputed {...config} />

export default Fdek