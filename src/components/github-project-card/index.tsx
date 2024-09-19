import { Fragment } from 'react';
import { AiOutlineFork, AiOutlineStar, AiOutlineEye } from 'react-icons/ai';
import { LiaExternalLinkAltSolid } from 'react-icons/lia';
import { MdInsertLink } from 'react-icons/md';
import { ga, getLanguageColor, skeleton } from '../../utils';
import { GithubProject } from '../../interfaces/github-project';

const GithubProjectCard = ({
  header,
  githubProjects,
  loading,
  limit,
  username,
  googleAnalyticsId,
}: {
  header: string;
  githubProjects: GithubProject[];
  loading: boolean;
  limit: number;
  username: string;
  googleAnalyticsId?: string;
}) => {
  if (!loading && githubProjects.length === 0) {
    return;
  }

  const renderSkeleton = () => {
    const array = [];
    for (let index = 0; index < limit; index++) {
      array.push(
        <div className="shadow-lg card compact bg-base-100" key={index}>
          <div className="flex flex-col justify-between w-full h-full p-8">
            <div>
              <div className="flex items-center">
                <span>
                  <h5 className="text-lg card-title">
                    {skeleton({
                      widthCls: 'w-32',
                      heightCls: 'h-8',
                      className: 'mb-1',
                    })}
                  </h5>
                </span>
              </div>
              <div className="mt-1 mb-5">
                {skeleton({
                  widthCls: 'w-full',
                  heightCls: 'h-4',
                  className: 'mb-2',
                })}
                {skeleton({ widthCls: 'w-full', heightCls: 'h-4' })}
              </div>
            </div>
            <div className="flex justify-between">
              <div className="flex flex-grow">
                <span className="flex items-center mr-3">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
              <div>
                <span className="flex items-center">
                  {skeleton({ widthCls: 'w-12', heightCls: 'h-4' })}
                </span>
              </div>
            </div>
          </div>
        </div>,
      );
    }

    return array;
  };

  const renderProjects = () => {
    return githubProjects.map((item, index) => (
      <a
        className="shadow-lg cursor-pointer card compact bg-base-100"
        href={item.html_url}
        key={index}
        onClick={(e) => {
          e.preventDefault();

          try {
            if (googleAnalyticsId) {
              ga.event('Click project', {
                project: item.name,
              });
            }
          } catch (error) {
            console.error(error);
          }

          window?.open(item.html_url, '_blank');
        }}
      >
        <div className="flex flex-col justify-between w-full h-full p-8">
          <div>
            <div className="flex items-center truncate">
              <div className="flex text-lg tracking-wide card-title text-base-content opacity-60">
                <MdInsertLink className="my-auto" />
                <span>{item.name}</span>
              </div>
            </div>
            <p className="mt-1 mb-5 text-sm text-base-content text-opacity-60">
              {item.description}
            </p>
          </div>
          <div className="flex justify-between text-sm truncate text-base-content text-opacity-60">
            <div className="flex flex-grow">
              <span className="flex items-center mr-3">
                <AiOutlineEye className="mr-0.5" />
                <span>{item.watchers_count}</span>
              </span>

              <span className="flex items-center mr-3">
                <AiOutlineStar className="mr-0.5" />
                <span>{item.stargazers_count}</span>
              </span>
              <span className="flex items-center">
                <AiOutlineFork className="mr-0.5" />
                <span>{item.forks_count}</span>
              </span>
            </div>
            <div className="flex flex-row items-center">
              {item?.homepage && (
                <a
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                  href={item?.homepage}
                  className="flex items-center mr-4"
                >
                  <LiaExternalLinkAltSolid className="mr-0.5" />
                  <span className="underline">Live</span>
                </a>
              )}
              <span className="flex items-center">
                <div
                  className="w-3 h-3 mr-1 rounded-full opacity-60"
                  style={{ backgroundColor: getLanguageColor(item.language) }}
                />
                <span>{item.language}</span>
              </span>
            </div>
          </div>
        </div>
      </a>
    ));
  };

  return (
    <Fragment>
      <div className="col-span-1 lg:col-span-2">
        <div className="grid grid-cols-2 gap-6">
          <div className="col-span-2">
            <div className="shadow card compact bg-base-100 bg-opacity-40">
              <div className="card-body">
                <div className="flex items-center justify-between mx-3 mb-2">
                  <h5 className="card-title">
                    {loading ? (
                      skeleton({ widthCls: 'w-40', heightCls: 'h-8' })
                    ) : (
                      <span className="text-base-content opacity-70">
                        {header}
                      </span>
                    )}
                  </h5>
                  {loading ? (
                    skeleton({ widthCls: 'w-10', heightCls: 'h-5' })
                  ) : (
                    <a
                      href={`https://github.com/${username}?tab=repositories`}
                      target="_blank"
                      rel="noreferrer"
                      className="opacity-50 text-base-content hover:underline"
                    >
                      See All
                    </a>
                  )}
                </div>
                <div className="col-span-2">
                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {loading ? renderSkeleton() : renderProjects()}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default GithubProjectCard;
