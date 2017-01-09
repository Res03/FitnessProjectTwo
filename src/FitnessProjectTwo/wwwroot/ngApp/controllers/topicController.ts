namespace FitnessProjectTwo.Controllers {

    export class TopicController {

        public topic;
        public topics;

        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService, private TopicService: FitnessProjectTwo.Services.TopicService) {
            this.getTopics();

        }
        public getTopics() {
            return this.TopicService.getTopics().then((response) => {
                this.topics = response.data
            });
        }

        
    }

    export class SubTopicController {

        public topic;
        public resourceID = "/api/topic/";

        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService, private TopicService: FitnessProjectTwo.Services.TopicService)
        {
            this.topic = this.getTopicById();
        }

        public getTopicById() {

            return this.$http.get(this.resourceID + this.$stateParams["id"]).then((response) => {
                this.topic = response.data
            });
        }
    }

    
}