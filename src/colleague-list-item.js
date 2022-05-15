import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import './colleague-list-item.css';

export default function ColleagueListItem(data) {
  const { colleague } = data;
  const colleagueImage = colleague.imagePortraitUrl !== null ? colleague.imagePortraitUrl : colleague.imageWallOfLeetUrl;
  return (
    <Card sx={{ minWidth: 250 }}>
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={2}>
            <div className="img-list-container">
              <img className="colleague-list-image" src={colleagueImage} />
            </div>
          </Grid>
          <Grid item xs={4}>
            <Typography>
              {colleague.name}
            </Typography>
            <Typography>
              Office: {colleague.office}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            {colleague.linkedIn !== null ? (
              <LinkedInIcon onClick={() => window.open(`https://linkedin.com/${colleague.linkedIn}`, '_blank')}/>
            ) : null}
            {colleague.gitHub !== null ? (
              <GitHubIcon onClick={() => window.open(`https://github.com/${colleague.gitHub}`, '_blank')}/>
            ) : null}
            {colleague.twitter !== null ? (
              <TwitterIcon onClick={() => window.open(`https://twitter.com/${colleague.twitter}`, '_blank')}/>
            ) : null}
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
}