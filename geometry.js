


function calculateTriangleArea() {
    //----------------triangleBase---------------
    const triangleBaseInput = document.getElementById('triangle-base')
    const triangleBaseText = triangleBaseInput.value; 
    const base = parseFloat(triangleBaseText)

    //----------------triangleHigh----------------
    const triangleHightInput = document.getElementById('triangle-hight')
    const triangleHightText = triangleHightInput.value;
    const height = parseFloat(triangleHightText)


    //-------------Arriea-------------
    const triangleArea = 0.5 * base * height
    console.log('Total Area...', triangleArea);
    //---------Displal------triangle------Area------
    const triangleAreaSpan = document.getElementById('triangle-area')
    triangleAreaSpan.innerText = triangleArea;
   
}


function calculateRactangleleArea () {
    //-------------rectangleWidth------------
    const rectangleWidthInput = document.getElementById('rectangleWidth')
    const rectangleWidthText = rectangleWidthInput.value;
    const width = parseFloat(rectangleWidthText)
    console.log(width);

    //-------------rectangleLength------------
    const rectangleLengthInput = document.getElementById('rectangleLength')
    const rectangleText = rectangleLengthInput.value;
    const Length = parseFloat(rectangleText)
    console.log(Length);

    //-------------RactangleleArea-------------
    const rectangleArea = width * Length
    console.log('Total rectangleArea....', rectangleArea);

    //------------Display-------RactangleleArea----------
    const ractangleleArea = document.getElementById('ractanglele-area');
    ractangleleArea.innerText = rectangleArea

    
}