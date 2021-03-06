import React, {Component} from 'react'
import { Paper, Grid } from '@material-ui/core'
import Typography from '@material-ui/core/Typography'
import CreateFormGroups from './CreateFormGroups'
import CreateFormTeams from './CreateFormTeams'

class CreateFormGroupTable extends Component{

  render(){

    const { availableTeams, selectedGroup, groups } = this.props

    return(
      <Grid container>
        <Grid item xs={5}>
          {/* <CreateFormTeams
            availableTeams={availableTeams}
            addTeamToGroup={this.props.addTeamToGroup}
          /> */}
        </Grid>
        <Grid item xs={1}>
        </Grid>
        <Grid item xs={6}>
          {/* <CreateFormGroups
            groups={groups}
            selectedGroup={selectedGroup}
            deleteGroup={this.props.deleteGroup}
            onSelectGroup={this.props.onSelectGroup}
            removeTeamFromGroup={this.props.removeTeamFromGroup}
          /> */}
        </Grid>
      </Grid>
    )
  }
}

export default CreateFormGroupTable