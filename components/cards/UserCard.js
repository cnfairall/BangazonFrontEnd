/* eslint-disable import/no-extraneous-dependencies */
import {
  Card, CardContent, Typography, CardActions, Button, Container,
} from '@mui/material';

export default function UserCard() {
  return (
    <Container>
      <Card>
        <CardContent>
          <Typography variant="h5" component="div">
            {/* {user.firstName} */}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Container>
  );
}
