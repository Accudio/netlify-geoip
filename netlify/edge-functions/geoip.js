export const config = { path: '/' }

export default async (request, context) => {
  return Response.json(
		{
			...context.geo,
			ip: context.ip
		},
		{
			headers: {
				'Access-Control-Allow-Origin': '*',
				'Access-Control-Allow-Methods': 'GET,OPTIONS'
			}
		}
	);
};
