import React from 'react';
import {
	CircularInput,
	CircularTrack,
	CircularProgress
} from 'react-circular-input'

const SkillCircle = ({
    FillValue,
    TextColor,
    Width,
    Height,
    TrackColor,
    ProgressColor,
    TrackWidth,
    ProgressWidth,
    LogoDY,
    PercentageDY,
    PercentageFontSize,
    LogoFontSize,
    LogoClass,
    PercentageText
}) =>{
    return(
        <CircularInput 
            value={FillValue} 
            radius={Width}
            >
            <CircularTrack 
                strokeWidth={TrackWidth} 
                stroke={TrackColor}
                />
            <CircularProgress 
                strokeWidth={ProgressWidth} 
                stroke={ProgressColor}
                />
            <g>
                <text x={Width} y={Height} textAnchor="middle" dy={LogoDY} font-family="FontAwesome" font-size={LogoFontSize} fill={TextColor}>
                    {LogoClass}
                </text>
            </g>
            <text x={Width} y={Height} textAnchor="middle" dy={PercentageDY} font-size={PercentageFontSize} fill={TextColor} fontWeight="bold">
                {PercentageText}
            </text>                                    
        </CircularInput>
    )
}

export default SkillCircle;