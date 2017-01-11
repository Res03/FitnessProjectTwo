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

    
    export class AddTopicController {

        public addedTopic;
        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService, private TopicService: FitnessProjectTwo.Services.TopicService) {

        }
        public addTopic() {
            this.TopicService.addTopic(this.addedTopic);

        }

    }

    export class EditTopicController {
        public topic;
       
        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService, private TopicService: FitnessProjectTwo.Services.TopicService) {
            this.$http.get("/api/topic/" + this.$stateParams["id"]).then((response) => {
                this.topic = response.data
            });

        }
        public editTopic()
        {
            this.TopicService.editTopic(this.topic);
        }
        
    }
    export class DeleteTopicController {
        //public deleteThisTopic;
        public topic;
        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService, private TopicService: FitnessProjectTwo.Services.TopicService) {
            this.$http.get("/api/topic/" + this.$stateParams["id"]).then((response) => {
                this.topic = response.data
            });
        }

        public deleteTopic()
        {
            this.TopicService.deleteTopic()

        }

    }
   

    

    export class SubTopicController {

        public topic;
        //public subtopic;
        public resourceID = "/api/topic/";
        //public subResource = "/api/addSubTopic/";

        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService, private TopicService: FitnessProjectTwo.Services.TopicService)
        {
            
            this.topic = this.getTopicById();
        }

        public getTopicById() {

            return this.$http.get(this.resourceID + this.$stateParams["id"]).then((response) => {
                this.topic = response.data
            });
        }

        //public addSubtopic() {
        //    this.$http.post(this.subResource, this.subtopic).then((res) => {
        //        this.$state.go("subtopics");
           // })
       // }
    }

    export class AddSubTopicController {
        public subtopic;
        public topic;
       // public resourceID = "/api/topic/";
        public addedSubTopic;
        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService, private SubTopicService: FitnessProjectTwo.Services.SubTopicService) {
            //this.$http.get("/api/addSubTopic/" + this.$stateParams["id"]);
             this.$http.get("/api/topic/" + this.$stateParams["id"]).then((response) => {
                 this.subtopic = response.data
            });
             //this.addedSubTopic.topicid = this.topic.id;
             //console.log(this.addedSubTopic.topicid);
        }

        public addSubTopic() {
            this.SubTopicService.addSubTopic(this.addedSubTopic);
        }

      
    }
}