namespace FitnessProjectTwo.Controllers {

    export class CommentsController {

        public subtopic;
        public resource = "/api/comment/";

        constructor(private $http: ng.IHttpService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService, private TopicService: FitnessProjectTwo.Services.TopicService) {

            this.subtopic = this.getCommentsFromId();
        }

        public getCommentsFromId() {
            return this.$http.get(this.resource + this.$stateParams["id"]).then((response) => {
                this.subtopic = response.data
            });

        }
    }

}