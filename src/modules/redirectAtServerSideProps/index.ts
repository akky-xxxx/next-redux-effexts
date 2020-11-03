// import node_modules
import { ServerResponse } from "http"

// import others
import { ServiceStatusResponse } from "../../shared/types/Common"
import { Endpoints } from "../../shared/const/Endpoints"

// main
const {
  REDIRECT: { ERROR },
} = Endpoints
export const redirectAtServerSideProps = (
  res: ServerResponse,
  anyState: ServiceStatusResponse,
) => {
  const { status } = anyState
  if (status === 403) {
    res.writeHead(302, { Location: ERROR })
    res.end()
  }
}
