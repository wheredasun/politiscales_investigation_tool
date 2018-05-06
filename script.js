$( function() {
    $( "#b-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 0, 100 ],
        slide: function( event, ui ) {
            $( "#b" ).val( ui.values[ 0 ] + "% / " + (100 - ui.values[ 0 ] - (100 - ui.values[ 1 ])) + "% / " + (100 - ui.values[ 1 ]) + "%");
        }
    });
    $( "#b" ).val("0% / 100% / 0%");


    $( "#c-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 0, 100 ],
        slide: function( event, ui ) {
            $( "#c" ).val( ui.values[ 0 ] + "% / " + (100 - ui.values[ 0 ] - (100 - ui.values[ 1 ])) + "% / " + (100 - ui.values[ 1 ]) + "%");
        }
    });
    $( "#c" ).val("0% / 100% / 0%");


    $( "#t-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 0, 100 ],
        slide: function( event, ui ) {
            $( "#t" ).val( ui.values[ 0 ] + "% / " + (100 - ui.values[ 0 ] - (100 - ui.values[ 1 ])) + "% / " + (100 - ui.values[ 1 ]) + "%");
        }
    });
    $( "#t" ).val("0% / 100% / 0%");


    $( "#m-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 0, 100 ],
        slide: function( event, ui ) {
            $( "#m" ).val( ui.values[ 0 ] + "% / " + (100 - ui.values[ 0 ] - (100 - ui.values[ 1 ])) + "% / " + (100 - ui.values[ 1 ]) + "%");
        }
    });
    $( "#m" ).val("0% / 100% / 0%");


    $( "#j-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 0, 100 ],
        slide: function( event, ui ) {
            $( "#j" ).val( ui.values[ 0 ] + "% / " + (100 - ui.values[ 0 ] - (100 - ui.values[ 1 ])) + "% / " + (100 - ui.values[ 1 ]) + "%");
        }
    });
    $( "#j" ).val("0% / 100% / 0%");


    $( "#s-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 0, 100 ],
        slide: function( event, ui ) {
            $( "#s" ).val( ui.values[ 0 ] + "% / " + (100 - ui.values[ 0 ] - (100 - ui.values[ 1 ])) + "% / " + (100 - ui.values[ 1 ]) + "%");
        }
    });
    $( "#s" ).val("0% / 100% / 0%");


    $( "#p-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 0, 100 ],
        slide: function( event, ui ) {
            $( "#p" ).val( ui.values[ 0 ] + "% / " + (100 - ui.values[ 0 ] - (100 - ui.values[ 1 ])) + "% / " + (100 - ui.values[ 1 ]) + "%");
        }
    });
    $( "#p" ).val("0% / 100% / 0%");


    $( "#e-range" ).slider({
        range: true,
        min: 0,
        max: 100,
        values: [ 0, 100 ],
        slide: function( event, ui ) {
            $( "#e" ).val( ui.values[ 0 ] + "% / " + (100 - ui.values[ 0 ] - (100 - ui.values[ 1 ])) + "% / " + (100 - ui.values[ 1 ]) + "%");
        }
    });
    $( "#e" ).val("0% / 100% / 0%");

//    Badges

    $( "#anar-range" ).slider({
        min: 0,
        max: 100,
        values: [ 0 ],
        slide: function( event, ui ) {
            $( "#anar" ).val( ui.values[ 0 ] + "%");
        }
    });
    $( "#anar" ).val("0%");

    $( "#prag-range" ).slider({
        min: 0,
        max: 100,
        values: [ 0 ],
        slide: function( event, ui ) {
            $( "#prag" ).val( ui.values[ 0 ] + "%");
        }
    });
    $( "#prag" ).val("0%");

    $( "#femi-range" ).slider({
        min: 0,
        max: 100,
        values: [ 0 ],
        slide: function( event, ui ) {
            $( "#femi" ).val( ui.values[ 0 ] + "%");
        }
    });
    $( "#femi" ).val("0%");

    $( "#comp-range" ).slider({
        min: 0,
        max: 100,
        values: [ 0 ],
        slide: function( event, ui ) {
            $( "#comp" ).val( ui.values[ 0 ] + "%");
        }
    });
    $( "#comp" ).val("0%");

    $( "#vega-range" ).slider({
        min: 0,
        max: 100,
        values: [ 0 ],
        slide: function( event, ui ) {
            $( "#vega" ).val( ui.values[ 0 ] + "%");
        }
    });
    $( "#vega" ).val("0%");

    $( "#mona-range" ).slider({
        min: 0,
        max: 100,
        values: [ 0 ],
        slide: function( event, ui ) {
            $( "#mona" ).val( ui.values[ 0 ] + "%");
        }
    });
    $( "#mona" ).val("0%");

    $( "#reli-range" ).slider({
        min: 0,
        max: 100,
        values: [ 0 ],
        slide: function( event, ui ) {
            $( "#reli" ).val( ui.values[ 0 ] + "%");
        }
    });
    $( "#reli" ).val("0%");

    $("#submit").click(function() {
        var s0 = $( "#s-range" ).slider("values")[0];
        var s1 = 100 - $( "#s-range" ).slider("values")[1];

        var j0 = $( "#j-range" ).slider("values")[0];
        var j1 = 100 - $( "#j-range" ).slider("values")[1];

        var b0 = $( "#b-range" ).slider("values")[0];
        var b1 = 100 - $( "#b-range" ).slider("values")[1];

        var p0 = $( "#p-range" ).slider("values")[0];
        var p1 = 100 - $( "#p-range" ).slider("values")[1];

        var e0 = $( "#e-range" ).slider("values")[0];
        var e1 = 100 - $( "#e-range" ).slider("values")[1];

        var t0 = $( "#t-range" ).slider("values")[0];
        var t1 = 100 - $( "#t-range" ).slider("values")[1];

        var m0 = $( "#m-range" ).slider("values")[0];
        var m1 = 100 - $( "#m-range" ).slider("values")[1];

        var c0 = $( "#c-range" ).slider("values")[0];
        var c1 = 100 - $( "#c-range" ).slider("values")[1];

        // badges
        var anar = $( "#anar-range" ).slider("values")[0];
        var prag = $( "#prag-range" ).slider("values")[0];
        var femi = $( "#femi-range" ).slider("values")[0];
        var comp = $( "#comp-range" ).slider("values")[0];
        var vega = $( "#vega-range" ).slider("values")[0];
        var mona = $( "#mona-range" ).slider("values")[0];
        var reli = $( "#reli-range" ).slider("values")[0];


        var lang = $("#lang").val();

        var url = "//www.politiscales.net/" + lang +
            "/results/?" +
            "s0=" + s0 + "&" +
            "s1=" + s1 + "&" +
            "j0=" + j0 + "&" +
            "j1=" + j1 + "&" +
            "b0=" + b0 + "&" +
            "b1=" + b1 + "&" +
            "p0=" + p0 + "&" +
            "p1=" + p1 + "&" +
            "e0=" + e0 + "&" +
            "e1=" + e1 + "&" +
            "t0=" + t0 + "&" +
            "t1=" + t1 + "&" +
            "m0=" + m0 + "&" +
            "m1=" + m1 + "&" +
            "c0=" + c0 + "&" +
            "c1=" + c1 + "&" +
            "anar=" + anar + "&" +
            "prag=" + prag + "&" +
            "femi=" + femi + "&" +
            "comp=" + comp + "&" +
            "vega=" + vega + "&" +
            "mona=" + mona + "&" +
            "reli=" + reli;

        document.getElementById('iframe').src = url;
    });
} );