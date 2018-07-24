window.onload = function() {
new Vue({
    el: "#app",
    data() {
      return {
        name: "Forecast Cheapest States To Live",
        styleDownload: {
          background: "#FEAE00",
          height: "45px"
        },
        closeBtn: {
          opacity: 0
        },
        btnDownload: {
          width: "100%"
        },
        done: {},
        messages: [
          "<i class='fas fa-cogs'></i><br/>Forecasting The Numbers.",
          "<i class='fas fa-beer'></i><br/>Running Complicated Algorithms.",
          "<i class='fas fa-magic'></i></br>Casting Spells."
        ],
        status: ""
      };
    },
    methods: {
      download() {
        var interval = setInterval(() => {
          this.status = this.messages[
            Math.floor(Math.random() * this.messages.length)
          ];
        }, 1500)

          setTimeout(() => {
            clearInterval(interval);
            axios
            .get('http://localhost:9200/_xpack/ml/anomaly_detectors/lowest-state-hpi-actual/results/influencers')
            .then(response => {
                console.log(response)
                var states = [];
                var didFirst = false;
                var limitDate = new Date("January 1, 2005");
                response.data.influencers.forEach((influencer, key, arr) => {
                    if(Object.is(arr.length - 1, key)) {
                        states[influencer.influencer_field_value] = {fill:'yellow'};
                    } else {
                        if(new Date(influencer.timestamp) > limitDate && !(influencer.influencer_field_value in states)) {
                            if(didFirst) {
                                states[influencer.influencer_field_value] = {fill:'blue'};
                            } else {
                                states[influencer.influencer_field_value] = {fill:'green'};
                                didFirst = true;
                            }
                        }
                    }
                });

                console.log(states);
                $('#map').usmap({
                    stateSpecificStyles: states
                })
            })
            .catch(error => (console.log(error)))
            this.status = "<i class='fas fa-check'></i><br/>Here Are Some Magical States!";
            this.styleDownload =  {
                background: "#1CA650",
                width: "280px",
                height: "190px"
            },
            (this.done = {
            color: "#fff",
            opacity: 1,
            transform: "translate(-50%,-50%)",
            transition: 'all 0.3s 0s'
            }),

            (this.closeBtn = {
                opacity: 1,
                    visibility: 'visible',
                color: '#fff'
                })
            },8000),

            (this.styleDownload = {
            background: "#fff",
            width: "280px",
            height: "190px"
            }),
            (this.btnDownload = {
            background: "#FEAE00",
            transform: "translateY(91px)",
            transition: "transform 0.4s 0.3s, width 0.4s 0.3s, padding 0.4s 0.2s",
            width: "5%",
            paddingTop: "4px",
            paddingBottom: "4px",
            cursor: "default",
            animation: "loading 8s 1.4s forwards"
            }),
            (this.done = {
            opacity: 1,
            transform: "translate(-50%,-50%)"
            }),
            (this.name = "");
      },

      close() {
        $('#map').remove();
        $('#app').append('<div id="map" style="width: 500px; height: 500px; margin:0 auto;"></div>');
        this.status = '',
        (this.styleDownload = {
          transition: "all 0.5s 0.1s",
          background: "#FEAE00",
          height: "45px"
        }),
          (this.closeBtn = {
            opacity: 0
          }),
          (this.btnDownload = {
            width: "100%",
            transform: "translateY(0px)",
            transition: "transform 0.3s 0s"
          }),
          (this.done = {
            opacity: 0,
            transition: "all 0.1s 0s"
          });
        this.name = "Forecast Cheapest States To Live";
      }
    }
  });
}