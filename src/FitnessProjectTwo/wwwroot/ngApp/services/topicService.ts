namespace FitnessProjectTwo.Services {

    export class TopicService {

        public resource = "/api/topic/";//server-side controller reference
        
        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService) {

        }
        public getTopics() {

            return this.$http.get(this.resource);//gets all topics from the server side controller (discussioncontroller)
        }

        public addTopic(topic) {
            return this.$http.post(this.resource, topic).then((response) => {
                this.$state.go("discussion");
            })
        }

        
        public deleteTopic() {
            this.$http.delete(this.resource + this.$stateParams["id"]).then((response) => {
                this.$state.go("discussion");
            })
        }

        public editTopic(topic) {
            this.$http.post(this.resource, topic).then((response) => {
                this.$state.go("discussion");
            })
        }

    }
    angular.module("FitnessProjectTwo").service("TopicService", TopicService)

}